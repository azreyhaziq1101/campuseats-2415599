# Week 1 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

= building a UI imperatively is like telling the browser how to change the page step by step . Declarative React code describes what the UI should look like for the current data, and React updates the DOM for you.

2. Why must a component name start with a capital letter?
= React treats lowercase tags like <div> as HTML elements, and capitalised names as your own components.

3. What does a fragment <>...</> do, and why not just use a <div>?
= A fragment groups several elements under one parent without adding an extra element to the DOM, so you avoid unnecessary wrapper <div>s.

4. Name one benefit of splitting the UI into small components.
= easier reading and debugging, or changing one part without breaking the rest.