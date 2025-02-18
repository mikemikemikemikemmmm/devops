import sys
class GlobalVar:
    environment: str

    def __init__(self):
        environment = sys.argv[1]
        if environment == 'prod':
            self.environment = 'production'
        else:
            self.environment = "development"

global_var = GlobalVar()
