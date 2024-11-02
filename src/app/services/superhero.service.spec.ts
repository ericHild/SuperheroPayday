import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from "./superhero.service";
import { SuperHero } from "../models/superHero.model";

describe('SearchService', () => {

    let heroService: HeroService;
    let httpMock: HttpTestingController;

    // Initialisation du module de test avant chaque test
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroService] 
        }).compileComponents();
    });

    beforeEach(() => {
        heroService = TestBed.inject(HeroService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    // Est nécessaire, car ici on fait une vérification des requêtes HTTP après chaque test.
    // On vérifie qu'elles se comportent correctement.
    afterEach(() => {
        httpMock.verify();
    });

    describe('getHeros()', () => {
        
        test('GET API : should return a json array heros list', (done) => {
            const mockHeroes: SuperHero[] = [
                {
                    id: 0,
                    firstName: "Name_0",
                    lastName: "Lastname_0",
                    superHero: "SuperHero_0",
                    detail: "Detail_0",
                    hourlyRate: 0,
                    numberOfHoursWorked: 0,
                },
                {
                    id: 1,
                    firstName: "Name_1",
                    lastName: "Lastname_1",
                    superHero: "SuperHero_1",
                    detail: "Detail_1",
                    hourlyRate: 1,
                    numberOfHoursWorked: 1,
                }
            ];

            heroService.getHeros().subscribe((heros) => {
                // Assertions avec expect()
                // Ici heros est envoyé / reçu grâce à la ligne 65
                expect(heros.length).toBe(2);
                done(); // Permet de s'assurer que l'on arrrive bien à la fin de l'opération asynchrone
            });
            
            // Simulation de la requête HTTP GET vers `./assets/data/superheros.json`
            const req = httpMock.expectOne('./assets/data/superheros.json');
            expect(req.request.method).toBe('GET');
            // Retourne les données simulées en réponse à la requête
            req.flush(mockHeroes);
        });

        test('GET API Error : should return a error message', (done) => {});

    });

});