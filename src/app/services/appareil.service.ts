export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Séchoir',
      status: 'éteint'
    },
    {
      name: 'Repasseuse',
      status: 'éteint'
    }
  ];
  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
}

switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
}
}
