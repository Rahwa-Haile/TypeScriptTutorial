function greet (name: string | null | undefined) {
    if(name)
        console.log('Hola'+ name.toUpperCase());
    else
    console.log('Hola, nameless person')
}

greet(undefined);