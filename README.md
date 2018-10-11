# EcoLens

## Description

### Summary

EcoLens is, first and foremost, an ecological data collection application designed to streamline field work and subsequent data management by offering a digital alternative to traditional paper data forms.

### Advantages

The potential advantages of adopting a digital data collection system include:

    - Enhanced workflows through simple and easy to navigate menus and forms
    - Data security through immediate and automatic database storage
    - Reduced errors through input validation and user prompts
    - Organization and accessibility of forms and reference materials
    - Custom features to further promote data collection accuracy and efficiency
    - Paperless for environmentally friendly environmental professionals

### Development Status

The application is still in a relatively early stage of development with the majority of features still being planned and, as such, currently only provides for a basic flora presence/absence inventory. Planned features include:

    - Input validation
    - User specific data collection
    - Editing and deleting sites and years
    - Adding, editing, and deleting families and species
    - Automatic species name updates from the VASCAN API
    - Species of Concern (SoC) forms
    - Ecological Land Classification (ELC) forms
    - Forest, Meadow, and Wetland Plot Monitoring forms
    - ArcGIS API integration for field site navigation, and mapping SoC points and ELC polygons
    - Daily Safety Record forms
    - User group chats for field staff check-in and communication

### Inspiration

The inspiration for developing EcoLens stemmed from first-hand experience using often cumbersome and error-prone paper-based ecological field data collection systems which also required extensive manual data management to prepare data for use in scientific analysis.

### Technologies

The primary technologies used to develop EcoLens are MySQL, Express, React, and Node.

## Walkthrough

Initially, you will be met with an authentication page where you can either sign in or, if you don't yet have an account, sign up.

![Authentication](public/images/authentication.jpg)

After signing in, the home page will display a list of study sites that have saved data, as well as an option to add a new site name.

![Site Selection](public/images/sites.jpg)

Upon selecting a study site, you will be taken to a page listing all associated study years with saved data, as well as an option to add a new study year.

![Site Overview](public/images/site-overview.jpg)

Upon selecting a study year, you will be taken to the associated Flora Inventory page. If you previously entered data for a given site-year, it will be loaded and show the correct status for all species checkboxes.

![Inventory Form](public/images/inventory.jpg)

The primary method of recording species is intended to be through the search bar near the top of the page. You can easily search for flora by starting to type and, after four characters, a dropdown list of matching species will appear with adjacent checkboxes. Checking or unchecking these boxes indicates the presence or absence of species at the given study site in that year and will immediately store the record in the database. When you're done with your search, simply click the "Clear" button to reset the search results. 

![Flora Search](public/images/search.jpg)

Below the search bar, you will find a complete list of flora families currently found in the Toronto region. Clicking on a family will expand its container to show a list of all associated species found in the Toronto region. Again, there are adjacent checkboxes that function exactly the same as in the search dropdown, and which share the same checkbox status.

![Expandable Family/Species List](public/images/species-list.jpg)

Once you have collected some data, you can check the "Species Richness" section to see live counts of species by local occurrence rank:
    L+ represents non-native species
    L5 represents the most common native species
    ...
    L1 represents the rarest native species

![Species Richness](public/images/species-richness.jpg)

## Contribution and Help

The first version of EcoLens was developed by the Dirty Hippies team of Ryan, Nodar, Matthew, and Leslie. Future project contribution and maintenance will primarily be carried out by Morrowii.

If you need help with anything related to this project or want to contribute, drop Morrowii a line on GitHub.

## Live Demo

The deployed app can be viewed here: https://ecolens.herokuapp.com/