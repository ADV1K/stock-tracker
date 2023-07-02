from fastapi import FastAPI
from fastapi.responses import RedirectResponse

app = FastAPI()

@app.get("/nifty50")
def nifty50():
    return RedirectResponse(url="https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050")

@app.get("/chart/{ticker}")
def chart(ticker: str):
    return RedirectResponse(url=f"https://www.nseindia.com/api/chart-databyindex?index={ticker}EQN")
