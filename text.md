copy styles for MealItemForm component

import MealItemForm to MealItem component

Input component will be created as common component

Adding {...props.input} to an element ensures, that this element gets
all the attributes shared from the custom component by using attribute input={{ id: "amount", type: "number", min: "1", max: "5" }} - all keyvalue pairs in this object will be shared with element, that has an attribute {...props.input}
