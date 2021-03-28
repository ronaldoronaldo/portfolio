import logoArvore from 'assets/images/icon-otto.svg'
import logoGuten from 'assets/images/icon-guten.svg'

let data = [
  {
    id: 1,
    networks: {
      name:
        'Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'pending'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 2,
    networks: {
      name: 'Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'pending'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 3,
    networks: {
      name: 'Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'finished'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 1,
    networks: {
      name:
        'Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'pending'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 2,
    networks: {
      name: 'Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'pending'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 3,
    networks: {
      name: 'Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'finished'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 1,
    networks: {
      name:
        'Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'pending'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 2,
    networks: {
      name: 'Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'pending'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 3,
    networks: {
      name: 'Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'finished'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 1,
    networks: {
      name:
        'Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'pending'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 2,
    networks: {
      name: 'Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'pending'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  },
  {
    id: 3,
    networks: {
      name: 'Rede Árvore Educação Sul',
      brands: 26,
      units: 234,
      students: 12412351245
    },
    trademarks: {
      name: 'Marca Sul 01',
      belongsTo: 'Rede Árvore Educação Sul',
      units: 2,
      students: 1829
    },
    units: {
      name: 'Unity Sul 01 - 01',
      belongsTo: 'Marca Sul 01',
      classes: 12,
      students: 1829
    },
    classes: {
      name: 201,
      belongsTo: 'Unity Sul 01 - 01',
      students: 38,
      platform: ['arvore', 'guten']
    },
    admin: {
      name: 'Chineze Afamefuna'
    },
    directors: {
      name: 'Chineze Afamefuna',
      units: ['North Unity 01']
    },
    coordinators: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    teachers: {
      name: 'Chineze Afamefuna',
      responsabilities: ['Ensino médio', '501', '601', '602'],
      units: ['North Unity 01 - 01']
    },
    students: {
      name: 'Georges Embolo',
      classes: ['501', 'Inglês V'],
      units: ['North Unity 01 - 02'],
      paymentStatus: 'finished'
    },
    employees: {
      name: 'Francisco Maia'
    },
    fellows: {
      name: 'Francisco José'
    }
  }
]

data = data.map(item => {
  if (item.classes.platform.length === 2) {
    item.classes.platform = [logoArvore, logoGuten]
  }

  return item
})

export default data
