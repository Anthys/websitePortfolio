from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     email = Column(String, unique=True, index=True)
#     hashed_password = Column(String)
#     is_active = Column(Boolean, default=True)

#     items = relationship("Item", back_populates="owner")


# class Item(Base):
#     __tablename__ = "items"

#     id = Column(Integer, primary_key=True, index=True)
#     title = Column(String, index=True)
#     description = Column(String, index=True)
#     owner_id = Column(Integer, ForeignKey("users.id"))

#     owner = relationship("User", back_populates="items")


class Entry(Base):
    __tablename__ = "entries"

    id = Column(Integer, primary_key=True, index=True)
    pName = Column(String)
    pType = Column(Integer)
    pTemp = Column(Integer)
    pLocation = Column(Integer)
    pRings = Column(Boolean)
    pLife = Column(Boolean)
    pAtmo = Column(Boolean)
    pMoons = Column(Integer)

    cFirstName = Column(String)
    cLastName = Column(String)
    cAdd1 = Column(String)
    cAdd2 = Column(String)
    cCity = Column(String)
    cState = Column(String)
    cPostalCode = Column(String)
    cCountry = Column(String)

    caName = Column(String)
    caNumber = Column(String)
    caExpDate = Column(String)
    caCVV = Column(String)

