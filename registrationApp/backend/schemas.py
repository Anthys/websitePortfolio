from typing import List, Union

from pydantic import BaseModel


class EntryBase(BaseModel):
    pName: str
    pType: int
    pTemp: int
    pLocation: int
    pRings: bool
    pLife: bool
    pAtmo: bool
    pMoons: int

    cFirstName: str
    cLastName: str
    cAdd1: str
    cAdd2: str
    cCity: str
    cState: str
    cPostalCode: str
    cCountry: str

    caName: str
    caNumber: str
    caExpDate: str
    caCVV: str

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
