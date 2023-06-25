# Exchange Rate Notebook

This is a simple PLN to EUR util app with conversion table and user exchange rate adjustment

The application is super fast, 100% SEO-friendly, accessible and responsive, as proven with Lighthouse report

![image](https://github.com/kzmijak/exchange-rate/assets/51298658/6a294e8f-1148-4ad6-896c-84187fd5998d)

The app uses Mockaroo API to generate sample data on demand

# Tech
- Vite React 18 + TypeScript + SWC
- **Tests**: Vitest + React Testing Library
- **State management**: MobX (mobx-react-lite)
- **UI Library**: Joy UI
- **Form control**: react-hook-form + yup

# Features
The app follows **Hexagonal Architecture**, meaning the core features of the app are split into atomic modules that are meant to encapsulate the entire logic around it's specific functionality 
- **Root Store**
  
    Global store configuration is located here. Currently the store engine provided by this module is coming from MobX library, however the it is only
    an implementation detail and the rest of the application is mostly unaware of it.

    This means that if the store engine was to be swapped with some other
    (Redux, Recoil, XState, etc), the rest of the app would remain mostly unaware of it.
 - **Transaction Form**
   
     Simple, yet responsive form allowing the user to insert new transaction to the table. Uses **react-hook-form** with **yup** schema to control and validate the form. Also uses **react-number-format**
     as a input mask to provide best user experience.

     Absolutely generic and agnostic to the rest to the application
 - **Conversion Table**
   
     Semantic HTML table displaying list of transactions with amount displayed for PLN and EUR. Also displays a sum of row amounts in PLN and EUR. Allows to delete any row.

     Refers to the **Currency Conversion** module to convert PLN to EUR
- **Currency Conversion**
  
     Simple utility module that encapsulates all converting needs.

     Consumes root store in order to read current conversion rate.


     
   
