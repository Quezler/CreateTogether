events.listen('block.tags', (event) => {
    event.add('create:windmill_sails', windmill_sails);
});
