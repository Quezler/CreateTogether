events.listen('item.tags', (event) => {
    event.add('create:no_move', no_move);
});
