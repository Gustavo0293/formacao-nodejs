//Funções do carrinho

/**
 * Adiciona um item ao carrinho.
 */
async function addItem(userCart, item) {
    userCart.push(item);
}

/**
 * Remove completamente um item do carrinho pelo nome.
 */
async function delItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
        return true;
    }
    console.log("Item não encontrado");
    return false;
}

/**
 * Remove uma unidade de um item do carrinho pelo nome.
 * Se a quantidade chegar a zero, remove o item do carrinho.
 */
async function removeItem(userCart, name) {
    const indexFound = userCart.findIndex((p) => p.name === name);
    if (indexFound === -1) {
        console.log("Item não encontrado");
        return false;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return true;
    }

    // Se quantidade for 1, remove o item do carrinho
    userCart.splice(indexFound, 1);
    return true;
}

/**
 * Calcula o total do carrinho.
 */
async function calculateTotal(userCart) {
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: R$ ${total}`);
    return total;
}

/**
 * Exibe o carrinho no console.
 */
async function displayCart(userCart) {
    console.log("Shopee cart list:");
    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | subtotal: ${item.subtotal()}`
        );
    });
}

export {
    addItem,
    delItem,
    removeItem,
    calculateTotal,
    displayCart,
}