import {IPokemonSpecie} from "../models/PokemonSpecie";
import {IEvolution} from "../models/Evolution";
import {moves} from "../data/moves";

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

export class PokeApi {

    static async importAllSpecies() {
        const response = await P.resource(['/api/v2/pokemon-species/?limit=3']);
        let consoleLog = "";
        const species: Record<number, IPokemonSpecie> = {};
        for (let res of response[0].results) {
            const urlSplit: [string] = res.url.split("/");
            const id: number = parseInt(urlSplit[urlSplit.length - 2]);
            const varieties: number[] = [];
            const response2 = await P.resource([`/api/v2/pokemon-species/${id}`]);
            let name = response2[0].name;
            let exibitionName = "";
            let description = "";
            response2[0].names.forEach((n: any) => {
                if (n.language.name === 'en') {
                    exibitionName = n.name;
                }
            })

            for (let d of response2[0].flavor_text_entries) {
                if (d.language.name === 'en') {
                    description = d.flavor_text;
                    break;
                }
            }

            response2[0].varieties.forEach((v: any) => {
                const urlSplitVariety: [string] = v.pokemon.url.split("/");
                varieties.push(parseInt(urlSplitVariety[urlSplitVariety.length - 2]));
            })

            species[id] = {
                id: id,
                name: name,
                exibitionName: exibitionName,
                description: description,
                varieties: varieties,
            };
            consoleLog = consoleLog + `${id}:{id:${id}, exibitionName: "${exibitionName}", name: "${name}", description: "${description}", varieties: [${varieties.toString()}]},`;
            console.log(consoleLog);
        }
    }


    static async importAllVarieties() {
        const response = await P.resource(['/api/v2/pokemon/?limit=251']);
        let consoleLog = "";
        const species: Record<number, IPokemonSpecie> = {};
        for (let res of response[0].results) {
            const urlSplit: [string] = res.url.split("/");
            const id: number = parseInt(urlSplit[urlSplit.length - 2]);
            let name = res.name;
            const response2 = await P.resource([`/api/v2/pokemon/${id}`]);

            console.log(response2[0].species.url)
            const urlSplitSpecie: [string] = response2[0].species.url.split("/");
            const specieId: number = parseInt(urlSplitSpecie[urlSplitSpecie.length - 2]);
            const isDefault = response2[0].is_default
            let type1: string = "";
            let type2: string = "";
            let evolutions: IEvolution[] = [];

            response2[0].types.forEach((t: any) => {
                if (t.slot === 1) {
                    type1 = t.type.name;
                }
                if (t.slot === 2) {
                    type2 = t.type.name;
                }
            })

            const responseSpecie = await P.resource([`/api/v2/pokemon-species/${specieId}`]);

            const urlSplitEvolutionChan: [string] = responseSpecie[0].evolution_chain.url.split("/");
            const evolutionChainId: number = parseInt(urlSplitEvolutionChan[urlSplitEvolutionChan.length - 2]);
            console.log('EVOLUTION CHAIN NAME', name);
            const evol = await P.getEvolutionChainById(evolutionChainId);

            evolutions = PokeApi.findEvolutions(evol.chain, name);
            console.log(evolutions.toString());
            let evolStr = "";
            evolutions.forEach(e => {
                evolStr += `{to: ${e.to}, method: "${e.method}", minLevel: ${e.minLevel}},`
            })

            // response2[0].evolutions.forEach((v: any) => {
            //     const urlSplitVariety: [string] = v.pokemon.url.split("/");
            //     varieties.push(parseInt(urlSplitVariety[urlSplitVariety.length - 2]));
            // })

            let hp = 0;
            let atk = 0;
            let def = 0;
            let speed = 0;
            response2[0].stats.forEach((s: any) => {
                if(s.stat.name === 'special-attack' || s.stat.name === 'attack'){
                    atk += s.base_stat;
                } else if(s.stat.name === 'special-defense' || s.stat.name === 'defense'){
                    def += s.base_stat;
                } else if(s.stat.name === 'speed'){
                    speed += s.base_stat;
                } else if( s.stat.name === 'hp') {
                    hp += s.base_stat;
                }
            });
            atk = Math.round(atk/2);
            def = Math.round(def/2);


            let pkmnMoves: number[] = [0];
            response2[0].moves.forEach((m: any) => {
                const urlMove: [string] = m.move.url.split("/");
                const moveId: number = parseInt(urlMove[urlMove.length - 2]);
                if(moves[moveId]){
                    pkmnMoves.push(moveId);
                }
            });
            // species[id] = {id: id, name: name, description: description, varieties: varieties};
            consoleLog = consoleLog + `${id}:{id:${id}, name: "${name}", specie: ${specieId}, is_default: ${isDefault}, type1: "${type1}", ${type2 ? `type2: "${type2}",` : ''} evolutions: [${evolStr}],
            baseHp: ${hp}, baseAtk: ${atk}, baseDef: ${def}, baseSpeed: ${speed}, moves: [${pkmnMoves.toString()}]  },`;

            /*
            0: {
            "id": 0,
            "name": "-",
            "specie": 0,
            "is_default": true,
            "type1": "unknown",
        },*/
            console.log(consoleLog);
        }
    }

    private static findEvolutions(chain: any, name: string): IEvolution[] {
        const evolutions: IEvolution[] = [];
        if (chain.species.name === name) {
            chain.evolves_to.forEach((e: any) => {
                const urlSplit: [string] = e.species.url.split("/");
                const evolutionId: number = parseInt(urlSplit[urlSplit.length - 2]);
                evolutions.push({to: evolutionId, method: "level_up", minLevel: e.evolution_details[0].min_level || 32})
            })
        } else if (chain.evolves_to[0]) {
            return PokeApi.findEvolutions(chain.evolves_to[0], name);
        }
        return evolutions;
    }

    static async importEncounters() {
        const tier1 = [];
        const tier2 = [];
        const tier3 = [];
        const tier4 = [];
        const tier5 = [];
        const response = await P.resource(['/api/v2/pokemon-species/?limit=100&offset=151']);
        let consoleLog = "";
        const species: Record<number, IPokemonSpecie> = {};
        for (let res of response[0].results) {
            const urlSplit: [string] = res.url.split("/");
            const id: number = parseInt(urlSplit[urlSplit.length - 2]);
            const response2 = await P.resource([`/api/v2/pokemon-species/${id}`]);
            const catchRate: number = response2[0].capture_rate;
            if (catchRate >= 200) {
                tier1.push(id);
            } else if (catchRate >= 100) {
                tier2.push(id);
            } else if (catchRate >= 45) {
                tier3.push(id);
            } else if (catchRate >= 35) {
                tier4.push(id);
            } else {
                tier5.push(id);
            }
        }

        console.log("TIER 1");

        let tier1Str = "";
        for (let i of tier1) {
            tier1Str += `{varietyId: ${i}}, `;
        }
        console.log(tier1Str);

        console.log("TIER 2");

        let tier2Str = "";
        for (let i of tier2) {
            tier2Str += `{varietyId: ${i}}, `;
        }
        console.log(tier2Str);

        console.log("TIER 3");
        let tier3Str = "";
        for (let i of tier3) {
            tier3Str += `{varietyId: ${i}}, `;
        }
        console.log(tier3Str);

        console.log("TIER 4");

        let tier4Str = "";
        for (let i of tier4) {
            tier4Str += `{varietyId: ${i}}, `;
        }
        console.log(tier4Str);

        console.log("TIER 5");

        let tier5Str = "";
        for (let i of tier5) {
            tier5Str += `{varietyId: ${i}}, `;
        }
        console.log(tier5Str);
    }


    static async importAllMoves() {
        const response = await P.resource(['/api/v2/move/?limit=1000']);
        let consoleLog = "";
        for (let res of response[0].results) {
            const urlSplit: [string] = res.url.split("/");
            const id: number = parseInt(urlSplit[urlSplit.length - 2]);
            const response2 = await P.resource([`/api/v2/move/${id}`]);
            if (response2[0].power > 0) {
                const name = response2[0].name;
                const power = response2[0].power;
                const accuracy = response2[0].accuracy;
                const type = response2[0].type.name;

                let exhibitionName = "";
                let description = "";
                for (let n of response2[0].names) {
                    if (n.language.name === 'en') {
                        exhibitionName = n.name;
                        break;
                    }
                }

                for (let d of response2[0].flavor_text_entries) {
                    if (d.language.name === 'en') {
                        description = d.flavor_text;
                        break;
                    }
                }
                consoleLog = consoleLog + `${id}:{id:${id}, exhibitionName: "${exhibitionName}", name: "${name}", description: "${description}", type: "${type}", accuracy: ${accuracy}, power: ${power}},`;
                console.log(consoleLog);
            }


        }
    }


}
