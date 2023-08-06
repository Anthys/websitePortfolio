import React, { useEffect } from 'react';
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';




// const [formData, setFormData] = useState({
//     pBU : "",
//     pFirstName : "",
//     pLastName : "",
//     pGenre : "",
//     pPhone : "",
//     pEmail : "",
//     pPerimetre : "",
//     pPoste : "",
//     pNomMagasin : "",
//     pKOMPresence : "",
//     pPresenceLancementFrance : "",
//     pPresenceSoiree : "",
//     pLangues : "",
//     pRegimeAlimentaire : "",
//     pParticularite : "",
//     pTalentParticulier : "",

//     pHebergementVeilleKOM : "",
//     pHebergementKOM : "",
//     pPersonnePartageChambre : "",
//     pBesoinSupplementaire : "",
//     pProblemeMedical : "",

//     pCommentViensTu : "",
//     pLieuArrivee : "",
//     pDateHeureArrivee : "",
//     pCommentReparsTu : "",
//     PLieuDepart : "",
//     pDateHeureDepart : "",

//   });

function createPlaceHolderEntry(id){
    return {
        id: id,
        pBU : "pBU",
        pFirstName : "pFirstName",
        pLastName : "pLastName",
        pGenre : "pGenre",
        pPhone : "pPhone",
        pEmail : "pEmail",
        pPerimetre : "pPerimetre",
        pPoste : "pPoste",
        pNomMagasin : "pNomMagasin",
        pKOMPresence : "pKOMPresence",
        pPresenceLancementFrance : "pPresenceLancementFrance",
        pPresenceSoiree : "pPresenceSoiree",
        pLangues : "pLangues",
        pRegimeAlimentaire : "pRegimeAlimentaire",
        pParticularite : "pParticularite",
        pTalentParticulier : "pTalentParticulier",

        pHebergementVeilleKOM : "pHebergementVeilleKOM",
        pHebergementKOM : "pHebergementKOM",
        pPersonnePartageChambre : "pPersonnePartageChambre",
        pBesoinSupplementaire : "pBesoinSupplementaire",
        pProblemeMedical : "pProblemeMedical",

        pCommentViensTu : "pCommentViensTu",
        pLieuArrivee : "pLieuArrivee",
        pDateHeureArrivee : "pDateHeureArrivee",
        pCommentReparsTu : "pCommentReparsTu",
        PLieuDepart : "PLieuDepart",
        pDateHeureDepart : "pDateHeureDepart",
    }
}

function createPlaceHolderEntryWithRealisticData(id){
    if (id == 1){return {
        id : id,
        pBU : "World Services",
        pFirstName : "John",
        pLastName : "Doe",
        pGenre : "Homme",
        pPhone : "06 12 34 56 78",
        pEmail : "email@gmail.com",
        pPerimetre : "DV Nord",
        pPoste : "Directeur de magasin",
        pNomMagasin : "Kiabi Paris",
        pKOMPresence : "Oui",
        pPresenceLancementFrance : "Oui",
        pPresenceSoiree : "Oui",
        pLangues : "Français, Anglais",
        pRegimeAlimentaire : "Végétarien",
        pParticularite : "Asthmatique",
        pTalentParticulier : "Chanteur",

        pHebergementVeilleKOM : "Oui",
        pHebergementKOM : "Oui",
        pPersonnePartageChambre : "Michel Michel",
        pBesoinSupplementaire : "Non",
        pProblemeMedical : "Non",

        pCommentViensTu : "Train",
        pLieuArrivee : "Lilles Nord",
        pDateHeureArrivee : "2021-10-10 10:10",
        pCommentReparsTu : "Train",
        PLieuDepart : "Lilles Nord",
        pDateHeureDepart : "2021-10-10 10:10",
    }}
    else {return {
        id : id,
        pBU : "KIFS",
        pFirstName : "Jane",
        pLastName : "Doe",
        pGenre : "Femme",
        pPhone : "06 12 34 56 78",
        pEmail : "email2@gmail.com",
        pPerimetre : "DV Sud",
        pPoste : "Directrice de magasin",
        pNomMagasin : "Kiabi Paris",
        pKOMPresence : "Oui",
        pPresenceLancementFrance : "Non",
        pPresenceSoiree : "Oui",
        pLangues : "Français, Espagnol",

        pHebergementVeilleKOM : "",
        pHebergementKOM : "Oui",
        pPersonnePartageChambre : "",
        pBesoinSupplementaire : "",
        pProblemeMedical : "",
        pRegimeAlimentaire : "",
        pParticularite : "",
        pTalentParticulier : "",
        pCommentViensTu : "Voiture",
        pLieuArrivee : "",
        pDateHeureArrivee : "",
        pCommentReparsTu : "Voiture",
        PLieuDepart : "",
        pDateHeureDepart : "",

    }}
}

function tableCellsForEntry(entry){
    return (
        <TableRow
              key={entry.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">{entry.id}</TableCell>
            <TableCell align="right">{entry.pBU}</TableCell>
            <TableCell align="right">{entry.pFirstName}</TableCell>
            <TableCell align="right">{entry.pLastName}</TableCell>
            <TableCell align="right">{entry.pGenre}</TableCell>
            <TableCell align="right">{entry.pEmail}</TableCell>
            <TableCell align="right">{entry.pPhone}</TableCell>
            <TableCell align="right">{entry.pPerimetre}</TableCell>
            <TableCell align="right">{entry.pPoste}</TableCell>
            <TableCell align="right">{entry.pNomMagasin}</TableCell>
            <TableCell align="right">{entry.pKOMPresence}</TableCell>
            <TableCell align="right">{entry.pPresenceLancementFrance}</TableCell>
            <TableCell align="right">{entry.pPresenceSoiree}</TableCell>
            <TableCell align="right">{entry.pLangues}</TableCell>
            <TableCell align="right">{entry.pRegimeAlimentaire}</TableCell>
            <TableCell align="right">{entry.pParticularite}</TableCell>
            <TableCell align="right">{entry.pTalentParticulier}</TableCell>
            <TableCell align="right">{entry.pHebergementVeilleKOM}</TableCell>
            <TableCell align="right">{entry.pHebergementKOM}</TableCell>
            <TableCell align="right">{entry.pPersonnePartageChambre}</TableCell>
            <TableCell align="right">{entry.pBesoinSupplementaire}</TableCell>
            <TableCell align="right">{entry.pProblemeMedical}</TableCell>
            <TableCell align="right">{entry.pCommentViensTu}</TableCell>
            <TableCell align="right">{entry.pLieuArrivee}</TableCell>
            <TableCell align="right">{entry.pDateHeureArrivee}</TableCell>
            <TableCell align="right">{entry.pCommentReparsTu}</TableCell>
            <TableCell align="right">{entry.PLieuDepart}</TableCell>
            <TableCell align="right">{entry.pDateHeureDepart}</TableCell>
        </TableRow>
    );
}

function coolTable(entries){
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">BU</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Perimetre</TableCell>
            <TableCell align="right">Poste</TableCell>
            <TableCell align="right">Nom Magasin</TableCell>
            <TableCell align="right">KOM Presence</TableCell>
            <TableCell align="right">Presence Lancement France</TableCell>
            <TableCell align="right">Presence Soiree</TableCell>
            <TableCell align="right">Langues</TableCell>
            <TableCell align="right">Regime Alimentaire</TableCell>
            <TableCell align="right">Particularite</TableCell>
            <TableCell align="right">Talent Particulier</TableCell>
            <TableCell align="right">Hebergement Veille KOM</TableCell>
            <TableCell align="right">Hebergement KOM</TableCell>
            <TableCell align="right">Personne Partage Chambre</TableCell>
            <TableCell align="right">Besoin Supplementaire</TableCell>
            <TableCell align="right">Probleme Medical</TableCell>
            <TableCell align="right">Comment Viens Tu</TableCell>
            <TableCell align="right">Lieu Arrivee</TableCell>
            <TableCell align="right">Date Heure Arrivee</TableCell>
            <TableCell align="right">Comment Repars Tu</TableCell>
            <TableCell align="right">Lieu Depart</TableCell>
            <TableCell align="right">Date Heure Depart</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((row) => (
            tableCellsForEntry(row)
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
}

function makePlaceholderData(){
    return [createPlaceHolderEntry(0),
        createPlaceHolderEntryWithRealisticData(1),
        createPlaceHolderEntryWithRealisticData(2)];
}

export default function BackOffice() {

    const [dtbData, setDtbData] = useState(makePlaceholderData());

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'pBU', headerName: 'BU', width: 130 },
        { field: 'pFirstName', headerName: 'First name', width: 130 },
        { field: 'pLastName', headerName: 'Last name', width: 130 },
        { field: 'pGenre', headerName: 'Genre', width: 130 },
        { field: 'pEmail', headerName: 'Email', width: 130 },
        { field: 'pPhone', headerName: 'Phone', width: 130 },
        { field: 'pPerimetre', headerName: 'Perimetre', width: 130 },
        { field: 'pPoste', headerName: 'Poste', width: 130 },
        { field: 'pNomMagasin', headerName: 'Nom Magasin', width: 130 },
        { field: 'pKOMPresence', headerName: 'KOM Presence', width: 130 },
        { field: 'pPresenceLancementFrance', headerName: 'Presence Lancement France', width: 130 },
        { field: 'pPresenceSoiree', headerName: 'Presence Soiree', width: 130 },
        { field: 'pLangues', headerName: 'Langues', width: 130 },
        { field: 'pRegimeAlimentaire', headerName: 'Regime Alimentaire', width: 130 },
        { field: 'pParticularite', headerName: 'Particularite', width: 130 },
        { field: 'pTalentParticulier', headerName: 'Talent Particulier', width: 130 },
        { field: 'pHebergementVeilleKOM', headerName: 'Hebergement Veille KOM', width: 130 },
        { field: 'pHebergementKOM', headerName: 'Hebergement KOM', width: 130 },
        { field: 'pPersonnePartageChambre', headerName: 'Personne Partage Chambre', width: 130 },
        { field: 'pBesoinSupplementaire', headerName: 'Besoin Supplementaire', width: 130 },
        { field: 'pProblemeMedical', headerName: 'Probleme Medical', width: 130 },
        { field: 'pCommentViensTu', headerName: 'Comment Viens Tu', width: 130 },
        { field: 'pLieuArrivee', headerName: 'Lieu Arrivee', width: 130 },
        { field: 'pDateHeureArrivee', headerName: 'Date Heure Arrivee', width: 130 },
        { field: 'pCommentReparsTu', headerName: 'Comment Repars Tu', width: 130 },
        { field: 'PLieuDepart', headerName: 'Lieu Depart', width: 130 },
        { field: 'pDateHeureDepart', headerName: 'Date Heure Depart', width: 130 }
    ]

    
  function sendGetRequest(entry){
    // alert(entry)
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry)
    };
    // alert(JSON.stringify(dtbData))
    fetch('http://127.0.0.1:8000/entries/', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty('detail')){data = makePlaceholderData()}
             setDtbData(data)})
        .catch(error => {
            let data = makePlaceholderData();
             setDtbData(data);
            });
  }

  useEffect(() => {
    sendGetRequest();
    }, []);

    return (
        <div>
        <h1>BackOffice</h1>
        {/* {JSON.stringify(dtbData)} */}
        {/* {coolTable(dtbData)} */}
        <DataGrid rows={dtbData} columns={columns} slots={{ toolbar: GridToolbar }} />
        </div>
    );
    }
