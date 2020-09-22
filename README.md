## 01b Concept & Sketches

Please design it for a format of 16:9 and make it self explanatory, so that I can understand what I am looking at even without your explanation.

The paragraph should include:





==============================

**Project refresh**

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


*Concept*

- We will be analyzing color theory in public media
    - What is the evolution of color choice on posters?
    - Can I add design location or distribution location as additional variables?
    - Can I add Medium as an additional variable, and section the color sections into smaller 'medium' based items?
- A visual representation of color theory in the Cooper Hewitt Poster Collection
    - I'm hoping to provide a repeatable concept, to represent color theory across the collection
    - I'd like to use a color wheel, with modified radius at each point of color, based on frequency in the data set
        - a similar alternative would be to use a color spectrum line with varying heights according to frequency in the data set
    - In addition to frequency, we could add time as a variable, to add an interactive layer to the visualization
- My target audience could potentially include graphic designers, art historians, and students, among others.
- Once completeed, this project could be used as educational example, on how to manipulate pre-existing visual templates into non-standard forms
- This project will be completed using the D3.js library, and published on Github. Additional tools used will include 
    - the Smithsonian API
    - Color palette tools such as: https://projects.susielu.com/viz-palette
- Using the Smithsonian API (src: https://collections.si.edu/search/), I will be querying the database for the "Poster" type locatied in the Cooper Hewitt, Smithsonian Design Museum (catalog record source). From there, I will be parsing for the following variables within the data set:
    - DATE
    - DESCRIPTION
    - DISTRIBUTED IN 
    - DESIGNED IN
    - MEDIUM
- Using the collected data, we will parse the DESCRIPTION object, to pull all relevant color names. We will do this by building a base array, complied of known, common color names against which to check the poster description copy. One hurdle we may encouter is the reliability of item description. The entire collection houses over 3,000 items however, which may alleviate this contraint. 
    - The height(radius) of each individual color will be determined by its frequency within the data set.
        - If Medium is used as an additional variable, it can be used to determine individual widths within each color section.
- Other projects that have sought to answer similar questions:
    - Color in Branding
        > https://digitalsynopsis.com/design/logo-colour-branding-psychology-industry-specific/
    - Although not tackling the same question, the following demonstrates a possible outcome to this visual project
        > https://blogs.ei.columbia.edu/2019/02/14/carbon-catalogue-products/s
    - London City Intelligence Data Visualisation and Information Design Guidelines
        > https://medium.com/nightingale/how-to-create-brand-colors-for-data-visualization-style-guidelines-dbd69c586dd9
    - Logo color wheels
        > https://www.tiredbees.com/2010/08/logo-colour-wheel/
        > https://www.canva.com/learn/color-psychology-the-logo-color-tricks-used-by-top-companies/
        > https://www.deviantart.com/pouryapouzesh/art/Logo-Color-wheel-545449830
    - Avengers Comic Book Cover Colors Data Visualization
        > https://coolinfographics.com/blog/2015/4/28/avengers-comic-book-cover-colors-data-visualization.html