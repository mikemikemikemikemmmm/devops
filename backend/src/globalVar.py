import sys


class GlobalVar:
    environment: str = "development"

    def __init__(self):
        if len(sys.argv) >= 2:
            environment = sys.argv[1]
            if environment == "prod":
                self.environment = "production"


global_var = GlobalVar()
