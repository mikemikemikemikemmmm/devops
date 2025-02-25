import uvicorn
from src.globalVar import global_var

if __name__ == "__main__":
    env = global_var.environment
    uvicorn.run(
        "src.app:app",
        port=8000,
        log_level="info",
        host="0.0.0.0",
        reload=env != "production",
    )
