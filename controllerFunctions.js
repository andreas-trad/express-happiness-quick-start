var functions = [];

functions['sample-route'] = function(req, res){
    res.send({result:'the resulte from the sample route controller function'});
}

exports.functions = functions;
