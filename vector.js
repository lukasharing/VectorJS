"use strict";

class Vector{
    constructor(){
        let args = arguments;
        if(args.length === 1 && args[0] instanceof Array){
            args = args[0];
        }

        if(args.length == 1){
            if(args[0] instanceof Vector){
                this.vector = [...args[0].vector];
                this.dimension = args[0].dimension;
            }
        }else if(args.length > 1){
            const vector = Array.from(args);
            if(vector.every(Number.isFinite)){
                this.vector = vector;
                this.dimension = args.length;
            }else{
                throw ("Vector: Components should only be numbers.");
            }
        }else{
            throw ("Vector: Needs at least two components.");
        }
            
    };

    x(){
        return this.vector[0];
    };
    y(){
        return this.vector[1];
    };
    z(){
        if(this.dimension >= 3){
            return this.vector[2];
        }else{
            throw ("Vector: Dimension should be at least 3.");
        }
    };
    w(){
        if(this.dimension >= 4){
            return this.vector[3];
        }else{
            throw ("Vector: Dimension should be at least 4.");
        }
    };

    get(s){
        if(typeof s === 'string'){
            if(s.length >= 2){
                return new Vector(s.split("").map(e => {
                    switch(e){
                        case 'x': return this.x();
                        case 'y': return this.y();
                        case 'z': return this.z();
                        case 'w': return this.w();
                        default: throw (`Vector: This component is not defined '${e}'`);
                    }
                }));
            }else{
                throw ("Vector: String should have at least two components");
            }
        }else if(s instanceof Number){
            if(s < this.dimension){
                return this.vector[s];
            }else{
                throw ("Vector: The parameter should be less than the dimension.");
            }
        }else{
            throw ("Vector: Component should be one string.");
        }
    };

    set(){
        let args = arguments;
        if(args.length === 1 && args[0] instanceof Array){
            args = args[0];
        }
        
        if(args.length == 1){
            if(args[0] instanceof Vector){
                this.vector = [...args[0].vector];
                this.dimension = args[0].dimension;
            }else{
                throw ("Vector: Needs at least two components.");
            }
        }else if(args.length == this.dimension){
            const vector = Array.from(args);
            if(vector.every(Number.isFinite)){
                this.vector = vector;
                this.dimension = args.length;
            }else{
                throw ("Vector: Components should only by numbers.");
            }
        }else{
            throw ("Vector: The number of parameters should be equal to the dimension of the vector.");
        }
    };

    add(){
        let args = arguments;
        if(args.length === 1 && args[0] instanceof Array){
            args = args[0];
        }

        if(args.length == 1){
            if(Number.isFinite(args[0])){
                return new Vector(this.vector.map(a => a + Number(args[0])));
            }else if(args[0] instanceof Vector){
                if(this.dimension == args[0].dimension){
                    return new Vector(this.vector.map((a, k) => a + args.vector[k]));
                }else{
                    throw ("Vector: Both vectors should have the same dimension.");
                }
            }else{
                throw ("Vector: Parameter should be number or vector.");
            }
        }else if(args.length == this.dimension){
            const vector = Array.from(args);
            if(vector.every(Number.isFinite)){
                return new Vector(this.vector.map((a, k) => a + vector[k]));
            }else{
                throw ("Vector: Every component should be a number.");
            }
        }else{
            throw ("Vector: The number of parameters should be equal to the dimension of the vector.");
        }
    };

    scale(){
        let args = arguments;
        if(args.length === 1 && args[0] instanceof Array){
            args = args[0];
        }

        if(args.length == 1){
            if(Number.isFinite(args[0])){
                return new Vector(this.vector.map(a => a * Number(args[0])));
            }else if(args[0] instanceof Vector){
                if(this.dimension == args[0].dimension){
                    return new Vector(this.vector.map((a, k) => a * args.vector[k]));
                }else{
                    throw ("Vector: Both vectors should have the same dimension.");
                }
            }else{
                throw ("Vector: Parameter should be number or vector.");
            }
        }else if(args.length == this.dimension){
            const vector = Array.from(args);
            if(vector.every(Number.isFinite)){
                return new Vector(this.vector.map((a, k) => a * vector[k]));
            }else{
                throw ("Vector: Every component should be a number.");
            }
        }else{
            throw ("Vector: The number of parameters should be equal to the dimension of the vector.");
        }
    };


    dot(){
        let args = arguments;
        if(args.length === 1 && args[0] instanceof Array){
            args = args[0];
        }

        if(args.length == 1){
            if(Number.isFinite(args[0])){
                return this.vector.map(a => a * Number(args[0])).reduce((a, b) => a + b, 0);
            }else if(args[0] instanceof Vector){
                if(this.dimension == args[0].dimension){
                    return this.vector.map((a, k) => a * args.vector[k]).reduce((a, b) => a + b, 0);
                }else{
                    throw ("Vector: Both vectors should have the same dimension.");
                }
            }else{
                throw ("Vector: Parameter should be number or vector.");
            }
        }else if(args.length == this.dimension){
            const vector = Array.from(args);
            if(vector.every(Number.isFinite)){
                return this.vector.map((a, k) => a * vector[k]).reduce((a, b) => a + b, 0);
            }else{
                throw ("Vector: Every component should be a number.");
            }
        }else{
            throw ("Vector: The number of parameters should be equal to the dimension of the vector.");
        }
    };
}