/**
 * Ansero E-Discovery Platform - Type Definitions
 */

/**
 * Highlight annotation on a document
 */
export interface Highlight {
  pageNumber: number;
  text: string;
  color: "yellow" | "orange" | "red";
  comment?: string;
  agentSource: string;
}

/**
 * Document in the e-discovery system
 */
export interface Document {
  id: string;
  batesNumber: string;
  title: string;
  type: "email" | "contract" | "memo" | "report" | "invoice" | "screenshot" | "article" | "other";
  date: string;
  author?: string;
  recipient?: string;
  content: string;
  pdfUrl: string;
  relevanceTier: 1 | 2 | 3 | 4;
  isPrivileged: boolean;
  privilegeConfidence?: number;
  tags: string[];
  pageCount: number;
  highlights?: Highlight[];
}

/**
 * User of the Ansero platform
 */
export interface User {
  email: string;
  name: string;
  role: "attorney" | "paralegal" | "admin";
}

/**
 * Legal case in the system
 */
export interface Case {
  id: string;
  name: string;
  caseNumber: string;
  client: string;
  opponent: string;
  caseType: string;
  status: "active" | "archived";
  documentCount: number;
  createdDate: string;
  lastAccessed?: string;
  thumbnail?: string;
}
