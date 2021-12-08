## What are Web Components?

    1.  set of web platform API's that allow us to create custom, reusable and
      encapsulated html tags to use in web pages and web apps

    2.  Web components do not require any special 3rd party libraries or
      frameworks but can certainly be used with them

### 3 Main Building Blocks

1.Custom Elements

2.Create custom HTML tags
3.Create custom class
Lifecycle methods availavble

      constructor() : Called when an instance of the element is created or
      upgraded


      connectedCallback() : Called every time when the element is inserted into
      the DOM


      isconnectedCallback() : Called every time when the element is removed from
      the DOM


      attributeChangedCallback(attributeName, oldValue, newValue) : Called when
      an attribute is added, removed, updated or replaced

    <br />

    Shadow DOM
    Used for self-contained components
    Encapsulate styles and markup
    Create with element.attachSahdow({mode:open})
    Create a 'shadowRoot' that we can reference and interact with
    <br />

    HTML Templates
    Defuine the encapsulated markup of our web component
    Template tag sstores markup on page
    Include both HTML and CSS in templates
    Use slots to add custom text
    <br />
