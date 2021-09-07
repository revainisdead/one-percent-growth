.PHONY=all run test mypy clean

ABS_DIR=$(shell pwd)
MYPY_DIR=$(ABS_DIR)/src:$(ABS_DIR)/src/stubs

MYPYPATH := $(MYPY_DIR)
export MYPYPATH


all: run

runserver:
	./start_api.sh

runclient:
	cd client && run start

lint:
	cd server && black .
	cd server && flake8 .
	cd client && prettier -- write.

test:
	python3 -m unittest

mypy:
	mypy $$(git ls-files -- "*.py" | sed "/patch_pipeline/d")

clean:
	@echo "Removing compiled python files . . ."
	@find . -name "*.pyc" -exec rm --force {} +
	@find . -name "*.pyo" -exec rm --force {} +
	@find . -name "*.un~" -exec rm --force {} +
	@find . -name "__pycache__" -exec rm --force --recursive {} +
	@find . -name ".mypy_cache" -exec rm --force --recursive {} +
