/**
 * AES-256-GCM encryption for stored credentials (API keys, tokens).
 *
 * Uses a 32-byte key from CREDENTIAL_ENCRYPTION_KEY env var.
 * Each value gets a unique IV — ciphertext format: iv:authTag:encrypted (hex).
 */

import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // GCM standard
const KEY_LENGTH = 32; // 256 bits

function getKey(): Buffer {
  const keyHex = process.env.CREDENTIAL_ENCRYPTION_KEY;
  if (!keyHex) {
    // If no encryption key is set, pass through unencrypted (development mode)
    // In production, this key MUST be set
    return Buffer.alloc(0);
  }
  const key = Buffer.from(keyHex, "hex");
  if (key.length !== KEY_LENGTH) {
    throw new Error(
      `CREDENTIAL_ENCRYPTION_KEY must be ${KEY_LENGTH * 2} hex characters (${KEY_LENGTH} bytes). Got ${keyHex.length} characters.`
    );
  }
  return key;
}

/**
 * Encrypt a plaintext string. Returns "iv:authTag:ciphertext" in hex.
 * If no encryption key is configured, returns the plaintext unchanged.
 */
export function encryptCredential(plaintext: string): string {
  const key = getKey();
  if (key.length === 0) return plaintext; // No key = dev mode passthrough

  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv);
  let encrypted = cipher.update(plaintext, "utf8", "hex");
  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag().toString("hex");

  return `${iv.toString("hex")}:${authTag}:${encrypted}`;
}

/**
 * Decrypt a credential string. Expects "iv:authTag:ciphertext" format.
 * If the input doesn't look encrypted (no colons), returns it as-is
 * (backwards compatible with pre-encryption plaintext values).
 */
export function decryptCredential(stored: string): string {
  const key = getKey();
  if (key.length === 0) return stored; // No key = dev mode passthrough

  // Check if this looks like an encrypted value (has 2 colons)
  const parts = stored.split(":");
  if (parts.length !== 3) {
    // Likely a pre-encryption plaintext value — return as-is
    return stored;
  }

  const [ivHex, authTagHex, ciphertext] = parts;

  try {
    const iv = Buffer.from(ivHex, "hex");
    const authTag = Buffer.from(authTagHex, "hex");
    const decipher = createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);
    let decrypted = decipher.update(ciphertext, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch {
    // If decryption fails, the value might be plaintext from before encryption was enabled
    return stored;
  }
}
