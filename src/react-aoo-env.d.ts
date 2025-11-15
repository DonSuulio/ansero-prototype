/// <reference types="react-scripts" />
```

4. Click **"Commit changes"** → **"Commit changes"**

---

## **STEP 3: Create Folder Structure**

Create empty placeholder files to set up folders:

1. **Create** `src/components/auth/.gitkeep`
   - Click "Add file" → "Create new file"
   - Name: `src/components/auth/.gitkeep`
   - Leave content empty
   - Commit

2. **Create** `src/components/dashboard/.gitkeep`
   - Name: `src/components/dashboard/.gitkeep`
   - Commit

3. **Create** `src/components/case-view/.gitkeep`
   - Name: `src/components/case-view/.gitkeep`
   - Commit

4. **Create** `src/services/.gitkeep`
   - Name: `src/services/.gitkeep`
   - Commit

5. **Create** `src/contexts/.gitkeep`
   - Name: `src/contexts/.gitkeep`
   - Commit

6. **Create** `src/data/.gitkeep`
   - Name: `src/data/.gitkeep`
   - Commit

7. **Create** `src/types/.gitkeep`
   - Name: `src/types/.gitkeep`
   - Commit

8. **Create** `src/theme/.gitkeep`
   - Name: `src/theme/.gitkeep`
   - Commit

9. **Create** `public/documents/.gitkeep`
   - Name: `public/documents/.gitkeep`
   - Commit

---

## **STEP 4: Connect to Builder.io**

Now your repo is ready!

1. **Go to Builder.io** (https://www.builder.io)
2. **Log in** to your account
3. **Click "Projects"** in left sidebar
4. **Click "Connect GitHub"** button
5. **Authorize Builder.io:**
   - Click "Authorize Builder"
   - Enter your GitHub password if prompted
6. **Select repository:**
   - Find `ansero-prototype` in the list
   - Click on it
7. **Wait 10-20 seconds** while Builder.io scans your repo

---

## **STEP 5: Start Building in Builder.io**

You should now see your project structure in Builder.io!

**In the prompt box at the top, paste:**
```
This project uses Material-UI v5 (already in package.json) and TypeScript.

Update src/App.tsx to include:
- Import BrowserRouter, Routes, Route, Navigate from react-router-dom
- Import CssBaseline from @mui/material
- Create basic routing structure:
  * Route / redirects to /login
  * Route /login shows a simple placeholder component with text "Login Screen"
  * Route /dashboard shows a simple placeholder with text "Dashboard"
  * Route /case/:caseId shows a simple placeholder with text "Case View"
- Use navy blue background (#1a2332)
- Use Merriweather font

Keep it simple for now - just basic routing with placeholders.
```

Press **Enter** and wait.

---

## **STEP 6: View Changes in GitHub**

After Builder.io generates code:

1. **Go back to your GitHub repo** (refresh the page)
2. **Click on `src/App.tsx`**
3. You should see the updated code with routing!

---

## **STEP 7: Continue with PRD Steps**

Now you're ready to build components! Use the prompts from **PRD Section 6.3**.

**Next prompt - Create Types:**
```
Create src/types/index.ts file with TypeScript interfaces.

Export these interfaces:
1. Document interface with fields: id (string), batesNumber (string), title (string), type ("email"|"contract"|"memo"|"report"|"invoice"|"screenshot"|"article"|"other"), date (string), author (string or undefined), recipient (string or undefined), content (string), pdfUrl (string), relevanceTier (1|2|3|4), isPrivileged (boolean), privilegeConfidence (number or undefined), tags (string array), pageCount (number), highlights (Highlight array or undefined)

2. Highlight interface with: pageNumber (number), text (string), color ("yellow"|"orange"|"red"), comment (string or undefined), agentSource (string)

3. Agent interface with: id (string), name (string), tier (1|2), status ("idle"|"processing"|"complete"|"skipped"|"error"), progress (number 0-100), result (AgentResult or undefined), processingTime (number or undefined)

4. AgentResult interface with: agentId (string), findings (string array), flaggedDocuments (string array), confidence (number or undefined), reasoning (string or undefined), metadata (Record<string, any> or undefined)

5. Query interface with: id (string), text (string), timestamp (Date), userId (string)

6. QueryResponse interface with: queryId (string), summary (string), agentResults (AgentResult array), relevantDocuments (Document array), auditTrail (AuditEntry array), totalProcessingTime (number)

7. AuditEntry interface with: timestamp (Date), agentId (string), action (string), details (string), documentIds (string array or undefined)

8. Case interface with: id (string), name (string), caseNumber (string), client (string), opponent (string), caseType (string), status ("active"|"archived"), documentCount (number), createdDate (string), lastAccessed (string or undefined), thumbnail (string or undefined)

9. User interface with: email (string), name (string), role ("attorney"|"paralegal"|"admin")

10. AuthState interface with: isAuthenticated (boolean), user (User or null), login (function that takes email and password strings and returns Promise<boolean>), logout (function with no parameters that returns void)

11. PresetQuery interface with: id (string), label (string), query (string), description (string), showcasedAgents (string array)

Use proper TypeScript syntax with export statements.
