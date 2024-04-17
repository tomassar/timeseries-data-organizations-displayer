import csv
import os

def read_organizations():
    # Adjust the file path to point to the correct location of your CSV file
    file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'organization_and_zones_dataset.csv')
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        organizations = list(reader)
    return organizations