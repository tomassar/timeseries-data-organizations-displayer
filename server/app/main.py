from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services.organization_service import read_organizations
from app.services.timeseries_service import read_timeseries
from app.database.database import Base, engine
from app.models.models import Organization, TimeSeries
from app.seeders.seed import seed_data 

Base.metadata.create_all(bind=engine)
seed_data()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/organizations")
async def get_organizations():
    return read_organizations()

@app.get("/timeseries/{org_id}")
async def get_timeseries(org_id: str):
    return read_timeseries(org_id)