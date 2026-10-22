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