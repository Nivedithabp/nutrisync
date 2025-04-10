from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from utils.product_lookup import find_product_by_barcode

app = FastAPI()

class BarcodeRequest(BaseModel):
    barcode: str

@app.post("/analyze")
async def analyze_product(data: BarcodeRequest):
    product = find_product_by_barcode(data.barcode)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product
