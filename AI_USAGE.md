# AI usage log

## Week 1
- Tool(s): None
- What I asked for: N/A
- What I kept, changed or rejected, and why: N/A
- One thing the AI got wrong and how I fixed it: N/A

## Week 2
- Tool(s): None
- What I asked for: N/A
- What I kept, changed or rejected, and why: N/A
- One thing the AI got wrong and how I fixed it: N/A

## Week 3
- Tool(s): Claude (claude.ai)
- What I asked for: Help completing the cart, CartPage,
  CheckoutForm and handlePlaceOrder TODOs (B3 to B5). 
- What I kept, changed or rejected, and why: I kept the fetch structure with
  reloadKey and AbortController because the lab requires them. I kept the
  lifted cart functions (handleAddToCart, handleChangeQty, handleRemove) and
  the reduce for the total, so it is derived and never stored. 
- One thing the AI got wrong and how I fixed it: It first guessed the cart bug
  was in App.jsx or Header.jsx. The real cause was in MenuList.jsx, where onAdd
  was received but never passed to MenuItemCard, so clicking called undefined.
  I found it after pasting MenuList and MenuItemCard, and fixed it with
  onAdd={onAdd}.

  ## Week 4
- Tool(s): Claude (claude.ai)
- What I asked for: A review of my file structure, CartProvider, App.jsx and the
  full project zip, checking it against the Week 4 spec.

- What I kept, changed or rejected, and why: I kept the structure and the
  cart context as reviewed. I removed the setState calls from the effect in
  useVendors and moved them into reload, to fix a lint error. I removed a
  leftover console.log from VendorPage.This is to see the function recently view item work or not
- One thing the AI got wrong and how I fixed it: After my useVendors edit,
  HomePage crashed with "Cannot destructure property 'vendors' of
  useVendors(...) as it is undefined". The hook was no longer returning its
  object. I fixed it by restoring
  return { vendors, loading, error, reload }.

  ## Week 5: Firebase Auth, AuthContext and protected routes

Tool:Claude 

What I asked
- Help debugging errors I hit along the way.
- How to make my personal feature (9, Recently viewed) work per user and clear on logout.

What I kept or changed:
- Fixed my own mistakes: `firebase.js` was saved outside `src/`, the `firebase` package was not installed, and one character of the API key in `.env.local` was missing (Network tab showed `API_KEY_INVALID`).
- For feature 9, I kept my `useLocalStorage` hook unchanged and used a per-user key `ce-recent-<uid>`. Guests save nothing, and the key is removed in `handleLogout`. I added `key={user?.uid}` in `Layout` so the list reloads when the user changes.

One thing the AI got wrong:
- Its instruction to put the login/logout block "after the Cart link" was unclear, and I placed it inside the Cart `NavLink`, so the layout and clicks broke. I fixed it by moving the block after the closing `</NavLink>`.
- It also first suggested rewriting `useLocalStorage` for key changes, which was more than needed. I asked for a minimal solution and used a `key` on `<main>` instead.


## Week 6

Tools: Claude

What I asked: Help me understand and build each Lab 6 file one at a time: the services layer, the live hooks (useVendors, useVendor, useMyOrders), placing and tracking orders, change and cancel, and moving my Recently viewed feature (digit 9) into Firestore.

What I kept or changed: I kept the services and hooks structure from the AI. I changed the code to match my own files, for example keeping my addViewed, clearRecent and onView names, and I skipped the CSS because my lecturer said to focus on React.

One thing the AI got wrong: It gave me a VendorPage that did not match my existing files, so I had to fix the imports and props myself.