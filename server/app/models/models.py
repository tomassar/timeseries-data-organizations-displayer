from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.database.database import Base

class Organization(Base):
    __tablename__ = "organizations"

    id = Column(Integer, primary_key=True, index=True)
    organization = Column(String, index=True)
    zone_id = Column(Integer)
    zone = Column(String)
    polygon_decoded = Column(String)

class TimeSeries(Base):
    __tablename__ = "time_series"

    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime)
    variable = Column(String)
    organization = Column(String, index=True)
    value = Column(Float, nullable=True)
    ingestion_time = Column(DateTime)

