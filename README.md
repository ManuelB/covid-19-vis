# covid-19-vis
This repository contains data visualizations based on https://github.com/CSSEGISandData/COVID-19 using kepler.gl

# Screenshots
![Screenshot 1](/screenshots/1.png?raw=true "Screenshot 1")
![Screenshot 2](/screenshots/2.png?raw=true "Screenshot 2")
![Screenshot 3](/screenshots/3.png?raw=true "Screenshot 3")
![Screenshot 4](/screenshots/4.png?raw=true "Screenshot 4")
![Screenshot 5](/screenshots/5.png?raw=true "Screenshot 5")
![Screenshot 6](/screenshots/6.png?raw=true "Screenshot 6")
![Germany Kreise 2020-03-20 with Covid-19 confirmed cases](/germany/rki-dashboard/2020-03-20-RKI-Cases-Landkreise.png?raw=true "Germany Kreise with Covid-19 confirmed cases")
![Germany Simulation 2020-03-27](/germany/rki-dashboard/Germany_Simulation_2020-03-27.png?raw=true "Germany Simulation 2020-03-27")
![Germany Kreise with Hospitals](/germany/kreise_with_hospitals_keplergl.png?raw=true "Germany Kreise with Hospitals")
![When are germanies hospitals full](/simulation/When-are-germanies-hospitals-full.png?raw=true "Germany Hospitals full")
![How is the situation in the 478 hospitals in the DIVI Intensivregister](/germany/divi-intensivregister-scrapper/2020-03-22.png?raw=true "Mapped hospitals from DIVI register")

# Kepler.gl

The website below can be used to generate a file that can be used in [kepler.gl] . Go on the website and click on the G in the upper left corner. This will generate [Covid19Data.geojson](kepler-gl-geojson/Covid19Data.geojson)

With the following link you can explore the data for yourself:
 * [Timelapse for World Wide Spread](https://kepler.gl/demo?mapUrl=https://raw.githubusercontent.com/ManuelB/covid-19-vis/gh-pages/kepler-gl-geojson/keplergl.json)
 * [Timelapse for World Wide Spread including 6 month simulation](https://kepler.gl/demo?mapUrl=https://raw.githubusercontent.com/ManuelB/covid-19-vis/gh-pages/simulation/keplergl.json)
 * [Germany Kreise 2020-03-20 with confirmed covid-19 cases per 100.000 inhabitans](https://kepler.gl/demo?mapUrl=https://raw.githubusercontent.com/ManuelB/covid-19-vis/gh-pages/germany/rki-dashboard/keplergl.json)
 * [Germany Kreise with hospitals](https://kepler.gl/demo?mapUrl=https://raw.githubusercontent.com/ManuelB/covid-19-vis/gh-pages/germany/kreise_with_hospitals_keplergl.json)
 * [Germany NW and RP 2020-03-23 20% of ICU beds for COVID-19](https://kepler.gl/demo?mapUrl=https://raw.githubusercontent.com/ManuelB/covid-19-vis/gh-pages/simulation/RP-NW_Landkreise_Intensivbetten_Strong_Mitigation_keplergl.json)
 * [Germany NW and RP 2020-03-23 20% of ICU beds for COVID-19 with age distribution](https://kepler.gl/demo?mapUrl=https://raw.githubusercontent.com/ManuelB/covid-19-vis/gh-pages/simulation/RP-NW_Landkreise_Intensivbetten_Strong_Mitigation_With_Age_On_District_keplergl.json)
 * Germany Simulation for all Districts Dowload, Unzip and Paste the following file https://raw.githubusercontent.com/ManuelB/covid-19-vis/gh-pages/germany/rki-dashboard/keplergl-simulation.zip
 * [Mapped data from DIVI Intensivregister](https://kepler.gl/demo?mapUrl=https://raw.githubusercontent.com/ManuelB/covid-19-vis/gh-pages/germany/divi-intensivregister-scrapper/keplergl.json)
 * [Germany current COVID-19 occupied beds potential beds in next 24 hours ](https://kepler.gl/demo?mapUrl=https://raw.githubusercontent.com/ManuelB/covid-19-vis/gh-pages/germany/divi-kartenansicht/hospitals-by-federal-state-keplergl.json)

# YouTube

 * https://www.youtube.com/watch?v=_Tn9rrjBQGQ - COVID-19 spread across the world visualized with kepler.gl
 * https://www.youtube.com/watch?v=FwhXsUaQmyM - Simulation der COVID-19 benötigten ICU Betten in Deutschland in den nächsten 6 Monaten
 * https://www.youtube.com/watch?v=ZjNbRwBumkg - COVID 19 Simulation, wann sind die Deutschen Krankenhäuser voll


# Website

The interactive website can be found here:
https://manuelb.github.io/covid-19-vis/ 
