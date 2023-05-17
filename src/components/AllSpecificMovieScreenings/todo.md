
[x] Create file structure for both components and styling files
    [x] write imports for files/types etc
    [x] add reusable code
    [x] use ScreeningType
[x] Write unstyled JSX for components
    [x] Component contains a list of components : `ul / li` 
        [x] The component that is the list item should contain Time, place language and a button to purchase tickets
        [x] There should be flags for subs and spoken language with a text disclaimer : `svg?` 
            [x] check out the link on figma for a flag resource. They are sorted according to `'en/ENG'` standard
        [x] The button should link to the booking point for the clicked screening id : `use Link in next, pass .id as query`
    [x]The list container should state what date 
    [x]The list container should divide itself from other list containers

[x] Write unstyled JSX for container 
    [x] The container should contain components of lists: a list of list or just list components that flow downwards 
    [x] The container should have a header at top and a button at the bottom
    [x] the button should display 2 more days of screenings and continue to add cumulatively as you click until there is a max of 5 days. NO, just show 2 days and then all.
        [x] use `expanded ? ...` ~~and `setState`~~ with an iteration instead of boolean
    [x] Add serversideprops to fetch data from API/database 
        [x] create a mock for data
        [x] use the mocked data to test functionality


[ ] Style components 
