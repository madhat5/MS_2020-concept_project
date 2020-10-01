## Project Concept & Sketches

**Project Questions**

- Why are we doing this?
    - What are questions that you want to explore with this visualization?
- What are you hoping to achieve?
    - What will I be looking at(title)?
    - Which visualization method is used and why?
- Who are we targeting?
- How is the end product going to be used?
- How are we publishing?
- What data do we have available? 
    - Which quantitative dataset is used? 
    - What are the properties of the data set? 
    - How many data points
    - What's the quality of the data? 
- Which other existing materials should we take into account?
- Which constraints do we have?
- Who else is doing something similar?

**Project Concept**

*Design concept:*

![cooper hewitt color theory]()


1. We will be analyzing the collection distribution of the National Museum of African American History and Culture
    - How much of African American cultural history is represented within the collection? 
    - What types of items are most common?
    - Where are the holes in the data?
2. A visual representation of African American history in the National Museum of African American History and Culture collection
    - I'm hoping to provide a repeatable concept, to show how representative the collection is with regards to American history
    - I'd like to use a color wheel, with each section representing a topic, and object type
    - I'd like to add decades as an additional variable
3. My target audience could potentially include graphic designers, art historians, and students, among others.
4. Once completeed, this project could be used as educational example, on how to find gaps
5. This project will be completed using the D3.js library, and published on Github. Additional tools used will include 
    - the Smithsonian API
    - Color palette tools such as: 
        > https://projects.susielu.com/viz-palette
    - Coding ref:
        > https://towardsdatascience.com/color-identification-in-images-machine-learning-application-b26e770c4c71
        > https://jariz.github.io/vibrant.js/
        - Sunbursts
            > https://observablehq.com/@d3/zoomable-sunburst
            > https://bl.ocks.org/kerryrodden/7090426
            > https://strongriley.github.io/d3/ex/sunburst.html
            > https://bl.ocks.org/jgaffuri/434e5ae309deef74715a1758afa8130d
            > https://github.com/eurostat/d3.sunburst
            > https://plotly.com/javascript/sunburst-charts/
    - Color theory refs:
        > https://www.rit.edu/science/munsell-color-lab
        > https://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/05/subtleties-of-color-part-1-of-6/
        > https://bl.ocks.org/pstuffa/3393ff2711a53975040077b7453781a9
6. Using the Smithsonian API (src: https://collections.si.edu/search/), I will be querying the database for the "NMAAHC" unit code. From there, I will be parsing for the following variables within the data set:
    - ID
    - TITLE
    - TOPIC
    - OBJECT_TYPE
    - YEAR 
7. Using the collected data, we will parse the array of objects for the values previously described, to pull all relevant data. 
8. Other projects that have sought to answer similar questions:
    - Color in Branding
        > https://digitalsynopsis.com/design/logo-colour-branding-psychology-industry-specific/
    - London City Intelligence Data Visualisation and Information Design Guidelines
        > https://medium.com/nightingale/how-to-create-brand-colors-for-data-visualization-style-guidelines-dbd69c586dd9
    - Logo color wheels
        > https://www.tiredbees.com/2010/08/logo-colour-wheel/
        > https://www.canva.com/learn/color-psychology-the-logo-color-tricks-used-by-top-companies/
        > https://www.deviantart.com/pouryapouzesh/art/Logo-Color-wheel-545449830
    - Avengers Comic Book Cover Colors Data Visualization
        > https://coolinfographics.com/blog/2015/4/28/avengers-comic-book-cover-colors-data-visualization.html


==========================================================================================

###### DEPRECATED

**Project Concept**

*Design concept:*

![cooper hewitt color theory](https://github.com/madhat5/MS_2020-concept_project/blob/master/DEPLOY/cooper_hewitt-color_theory-visual-concept-v1.png)


1. We will be analyzing color theory in public media
    - What is the evolution of color choice on posters?
    - Can I add design location or distribution location as additional variables?
    - Can I add Medium as an additional variable, and section the color sections into smaller 'medium' based items?
2. A visual representation of color theory in the Cooper Hewitt Poster Collection
    - I'm hoping to provide a repeatable concept, to represent color theory across the collection
    - I'd like to use a color wheel, with modified radius at each point of color, based on frequency in the data set
        - a similar alternative would be to use a color spectrum line with varying heights according to frequency in the data set
    - In addition to frequency, we could add time as a variable, to add an interactive layer to the visualization
3. My target audience could potentially include graphic designers, art historians, and students, among others.
4. Once completeed, this project could be used as educational example, on how to manipulate pre-existing visual templates into non-standard forms
5. This project will be completed using the D3.js library, and published on Github. Additional tools used will include 
    - the Smithsonian API
    - Color palette tools such as: 
        > https://projects.susielu.com/viz-palette
    - Is P5.js a better tool for this?
    - Add "All button" to slider?
    - Coding ref:
        > https://towardsdatascience.com/color-identification-in-images-machine-learning-application-b26e770c4c71
        > https://jariz.github.io/vibrant.js/
        - Sunbursts
            > https://observablehq.com/@d3/zoomable-sunburst
            > https://bl.ocks.org/kerryrodden/7090426
            > https://strongriley.github.io/d3/ex/sunburst.html
            > https://bl.ocks.org/jgaffuri/434e5ae309deef74715a1758afa8130d
            > https://github.com/eurostat/d3.sunburst
            > https://plotly.com/javascript/sunburst-charts/
    - Color theory refs:
        > https://www.rit.edu/science/munsell-color-lab
        > https://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/05/subtleties-of-color-part-1-of-6/
        > https://bl.ocks.org/pstuffa/3393ff2711a53975040077b7453781a9
    - Can I have hover states over the circles to show individual posters
6. Using the Smithsonian API (src: https://collections.si.edu/search/), I will be querying the database for the "Poster" type locatied in the Cooper Hewitt, Smithsonian Design Museum (catalog record source). From there, I will be parsing for the following variables within the data set:
    - DATE
    - DESCRIPTION
    - DISTRIBUTED IN 
    - DESIGNED IN
    - MEDIUM
    - *Cooper Hewitt has its own API*
        > https://collection.cooperhewitt.org/api/
        > https://jariz.github.io/vibrant.js/
7. Using the collected data, we will parse the DESCRIPTION object, to pull all relevant color names. We will do this by building a base array, complied of known, common color names against which to check the poster description copy. One hurdle we may encouter is the reliability of item description. The entire collection houses over 3,000 items however, which may alleviate this contraint. 
    - The height(radius) of each individual color will be determined by its frequency within the data set.
        - If Medium is used as an additional variable, it can be used to determine individual widths within each color section.
8. Other projects that have sought to answer similar questions:
    - Color in Branding
        > https://digitalsynopsis.com/design/logo-colour-branding-psychology-industry-specific/
    - Although not tackling the same question, the following demonstrates a possible outcome to this visual project
        - https://blogs.ei.columbia.edu/2019/02/14/carbon-catalogue-products/
    - London City Intelligence Data Visualisation and Information Design Guidelines
        > https://medium.com/nightingale/how-to-create-brand-colors-for-data-visualization-style-guidelines-dbd69c586dd9
    - Logo color wheels
        > https://www.tiredbees.com/2010/08/logo-colour-wheel/
        > https://www.canva.com/learn/color-psychology-the-logo-color-tricks-used-by-top-companies/
        > https://www.deviantart.com/pouryapouzesh/art/Logo-Color-wheel-545449830
    - Avengers Comic Book Cover Colors Data Visualization
        > https://coolinfographics.com/blog/2015/4/28/avengers-comic-book-cover-colors-data-visualization.html

##### Instructions
- npm install request async dotenv