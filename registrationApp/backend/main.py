from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)



# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/entries/", response_model=List[schemas.Entry])
def read_entries(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    entries = crud.get_entries(db, skip=skip, limit=limit)
    return entries

@app.post("/entries/", response_model=schemas.Entry)
def create_entry(entry: schemas.EntryCreate, db: Session = Depends(get_db)):
    return crud.create_entry(db=db, entry=entry)


# class Entry(BaseModel):
#     pName: str
#     pType: int
#     pTemp: int
#     pLocation: str
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

# app = FastAPI()


# # append entry in file entries.json
# def appendEntry(entry: Entry):
#     f = open("backend/entries.json", "a")
#     f.write(json.dumps(entry.dict()) + "\n")
#     f.close()

# @app.put("/entries")
# async def createEntry(entry_id: int, entry: Entry):
#     appendEntry(entry)
#     return {"entry_id": entry_id, **entry.dict()}

# @app.get("/entries")
# async def getEntries():
#     f = open("backend/entries.json", "r")
#     out = []
#     for i in f:
#         out.append(json.loads(i))
#     # out = f.read()
#     f.close()
#     return {"entries": [out]}