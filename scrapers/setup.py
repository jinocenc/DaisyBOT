from distutils.core import setup

setup(
    # Application name:
    name="DaisyApps",
    # Version number (initial):
    version="0.1.0",
    # Application author details:
    author="Jerold Inocencio",
    author_email="jerold.inocencio@gmail.com",

    # Packages
    packages=["pandas", "selenium", "bs4", "webdriver_manager"],

    # Include additional files into the package
    include_package_data=True,

    # license="LICENSE.txt",
    description="scrapers for daisybot",

    # long_description=open("README.txt").read(),

    # Dependent packages (distributions)
)