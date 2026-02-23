/**
 * Google Apps Script : enregistre les emails dans la feuille active.
 *
 * Mise en place :
 * 1. Ouvre ton Google Sheet (une feuille pour les leads).
 * 2. Onglet Extensions > Apps Script.
 * 3. Colle ce code, enregistre.
 * 4. Déploiement > Nouvelle version > Type : Application Web.
 *    - Exécuter en tant que : Moi
 *    - Qui peut y accéder : Toute personne
 * 5. Copie l’URL du déploiement (ex. https://script.google.com/macros/s/xxx/exec).
 * 6. Dans Vercel : Variables d’environnement > GOOGLE_SHEETS_WEBAPP_URL = cette URL.
 *
 * La feuille doit avoir au moins une ligne d’en-tête (ex. A1: "Email", B1: "Date").
 * Les nouvelles lignes seront ajoutées en dessous.
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let result = { success: false, error: null };

  try {
    const body = e.postData ? JSON.parse(e.postData.contents) : {};
    const email = (body.email || '').toString().trim();
    const date = (body.date || '').toString().trim() || new Date().toISOString();

    if (!email || email.indexOf('@') === -1) {
      result.error = 'Invalid email';
      return jsonResponse(result, 400);
    }

    sheet.appendRow([email, date]);
    result.success = true;
    return jsonResponse(result, 200);
  } catch (err) {
    result.error = err.message || 'Server error';
    return jsonResponse(result, 500);
  }
}

function jsonResponse(obj, status) {
  const output = ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}
