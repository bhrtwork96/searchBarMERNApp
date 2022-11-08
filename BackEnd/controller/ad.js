const { $where } = require('../models/addModel');
const Ad = require('../models/addModel');
const Companies = require('../models/companies')

const adSearch = async (req, res) => {
    const key = new RegExp(req.query.keyword,'i');

    try {
        let result = await Ad.aggregate(
            [
                {
                    $lookup: {
                        'from': "companies",
                        "localField": "companyId",
                        "foreignField": "_id",
                        "as": "company",
                    }
                },
                {
                    $match: {
                        "$or":[
                          {
                            "company.name":key
                          },
                          {
                            'primaryText':key
                          },
                          {
                            'headline':key
                          },
                          {
                            "description":key
                          }

                        ]

                    }
                }
            ]
        )
        res.send(result)
    }
    catch (err) {
        res.status(500).send(err);
    }
}

module.exports = { adSearch }