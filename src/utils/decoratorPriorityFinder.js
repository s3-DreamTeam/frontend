

/**
 * # GetHighestDecoratorType
 * Always returns the state of the highest priority decorator of a given
 * list of decorator. Used to color the main card, and all of it's decorators
 * with that specific color.
 * 
 * ---
 * @export
 * @param {*} decorators
 * @return {*} 
 */
export function GetHighestDecoratorType(decorators) {

    if (decorators === null || decorators === undefined) {
        return;
    }

    let result = 0;
    for (let index = 0; index < decorators.length; index++) {
        const item = decorators[index];
        let foundPriority = 0;

        switch (item.state) {
            default:
                foundPriority = 0;
                break;

            case ('error'):
                return 'error';

            case ('primary'):
                foundPriority = 1;
                break;

            case ('secondary'):
                foundPriority = 2;
                break;

            case ('info'):
                foundPriority = 3;
                break;

            case ('success'):
                foundPriority = 4;
                break;

            case ('warning'):
                foundPriority = 5;
                break;
        }

        if (foundPriority > result) {
            result = foundPriority;
        }
    }

    switch (result) {
        case (0):
            return 'inherit';

        case (1):
            return 'primary';

        case (2):
            return 'secondary';

        case (3):
            return 'info';

        case (4):
            return 'success';

        case (5):
            return 'warning';

        default:
            return 'error';
    }
}