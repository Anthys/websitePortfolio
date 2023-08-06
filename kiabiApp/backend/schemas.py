from typing import List, Union

from pydantic import BaseModel


# class EntryBase(BaseModel):
#     pName: str
#     pType: int
#     pTemp: int
#     pLocation: int
#     pRings: bool
#     pLife: bool
#     pAtmo: bool
#     pMoons: int

#     cFirstName: str
#     cLastName: str
#     cAdd1: str
#     cAdd2: str
#     cCity: str
#     cState: str
#     cPostalCode: str
#     cCountry: str

#     caName: str
#     caNumber: str
#     caExpDate: str
#     caCVV: str

# pBU : "",
# pFirstName : "",
# pLastName : "",
# pGenre : "",
# pPhone : "",
# pEmail : "",
# pPerimetre : "",
# pPoste : "",
# pNomMagasin : "",
# pKOMPresence : "",
# pPresenceLancementFrance : "",
# pPresenceSoiree : "",
# pLangues : "",
# pRegimeAlimentaire : "",
# pParticularite : "",
# pTalentParticulier : "",

# pHebergementVeilleKOM : "",
# pHebergementKOM : "",
# pPersonnePartageChambre : "",
# pBesoinSupplementaire : "",
# pProblemeMedical : "",

# pCommentViensTu : "",
# pLieuArrivee : "",
# pDateHeureArrivee : "",
# pCommentReparsTu : "",
# PLieuDepart : "",
# pDateHeureDepart : "",
class EntryBase(BaseModel):
    pBU: Union[str, None] = None
    pFirstName: Union[str, None] = None
    pLastName: Union[str, None] = None
    pGenre: Union[str, None] = None
    pPhone: Union[str, None] = None
    pEmail: Union[str, None] = None
    pPerimetre: Union[str, None] = None
    pPoste: Union[str, None] = None
    pNomMagasin: Union[str, None] = None
    pKOMPresence: Union[str, None] = None
    pPresenceLancementFrance: Union[str, None] = None
    pPresenceSoiree: Union[str, None] = None
    pLangues: Union[str, None] = None
    pRegimeAlimentaire: Union[str, None] = None
    pParticularite: Union[str, None] = None
    pTalentParticulier: Union[str, None] = None

    pHebergementVeilleKOM: Union[str, None] = None
    pHebergementKOM: Union[str, None] = None
    pPersonnePartageChambre: Union[str, None] = None
    pBesoinSupplementaire: Union[str, None] = None
    pProblemeMedical: Union[str, None] = None

    pCommentViensTu: Union[str, None] = None
    pLieuArrivee: Union[str, None] = None
    pDateHeureArrivee: Union[str, None] = None
    pCommentReparsTu: Union[str, None] = None
    PLieuDepart: Union[str, None] = None
    pDateHeureDepart: Union[str, None] = None


class EntryCreate(EntryBase):
    pass

class Entry(EntryBase):
    id: int

    class Config:
        orm_mode = True

# class ItemBase(BaseModel):
#     title: str
#     description: Union[str, None] = None


# class ItemCreate(ItemBase):
#     pass


# class Item(ItemBase):
#     id: int
#     owner_id: int

#     class Config:
#         orm_mode = True


# class UserBase(BaseModel):
#     email: str


# class UserCreate(UserBase):
#     password: str


# class User(UserBase):
#     id: int
#     is_active: bool
#     items: List[Item] = []

#     class Config:
#         orm_mode = True
