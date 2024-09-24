const database = 'BD3-BRUNO-AULA';

const collection = 'BD3_ATV2_PRODUTOS';

use(database);

db[collection].find({
    valor: {$gte: 80, $lte: 180}
})