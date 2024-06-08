// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Event: {
      interface: false,
      implements: [],
      id: 'kjzl6hvfrbw6c7q43m9k4svnkscfkl9b45gvucwsdx3ggudzm7q2rnkdvo0xy4x',
      accountRelation: { type: 'list' },
    },
    MVPProfile: {
      interface: false,
      implements: [],
      id: 'kjzl6hvfrbw6c9957frdp3kb202l590wba573vvo460408bfv6blvnga34sz3ef',
      accountRelation: { type: 'single' },
    },
    Session: {
      interface: false,
      implements: [],
      id: 'kjzl6hvfrbw6c96mp3fylhhotgj05px50h16gxkcif8zl5wgykk6c7fuhneu5k1',
      accountRelation: { type: 'list' },
    },
    Space: {
      interface: false,
      implements: [],
      id: 'kjzl6hvfrbw6c7mrh0e96x978mlixqvo7ekh36zmyaa3505s3qkjoijl8q6hvoz',
      accountRelation: { type: 'list' },
    },
  },
  objects: {
    Event: {
      gated: { type: 'string', required: false, immutable: false },
      title: { type: 'string', required: true, immutable: false },
      status: { type: 'string', required: false, immutable: false },
      endTime: { type: 'datetime', required: true, immutable: false },
      spaceId: { type: 'streamid', required: true, immutable: false },
      tagline: { type: 'string', required: false, immutable: false },
      timezone: { type: 'string', required: false, immutable: false },
      contracts: {
        type: 'list',
        required: false,
        immutable: false,
        item: {
          type: 'reference',
          refType: 'object',
          refName: 'EventTicket',
          required: false,
          immutable: false,
        },
      },
      createdAt: { type: 'datetime', required: true, immutable: false },
      image_url: { type: 'string', required: false, immutable: false },
      profileId: { type: 'streamid', required: true, immutable: false },
      startTime: { type: 'datetime', required: true, immutable: false },
      description: { type: 'string', required: false, immutable: false },
      meeting_url: { type: 'string', required: false, immutable: false },
      external_url: { type: 'string', required: false, immutable: false },
      max_participant: { type: 'integer', required: false, immutable: false },
      min_participant: { type: 'integer', required: false, immutable: false },
      participant_count: { type: 'integer', required: false, immutable: false },
      space: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c7mrh0e96x978mlixqvo7ekh36zmyaa3505s3qkjoijl8q6hvoz',
          property: 'spaceId',
        },
      },
      author: { type: 'view', viewType: 'documentAccount' },
      profile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9957frdp3kb202l590wba573vvo460408bfv6blvnga34sz3ef',
          property: 'profileId',
        },
      },
      sessions: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c96mp3fylhhotgj05px50h16gxkcif8zl5wgykk6c7fuhneu5k1',
          property: 'eventId',
        },
      },
    },
    EventTicket: {
      title: { type: 'string', required: true, immutable: false },
      contractAddress: { type: 'string', required: true, immutable: false },
    },
    MVPProfile: {
      username: { type: 'string', required: true, immutable: false },
      author: { type: 'view', viewType: 'documentAccount' },
      events: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c7q43m9k4svnkscfkl9b45gvucwsdx3ggudzm7q2rnkdvo0xy4x',
          property: 'profileId',
        },
      },
      spaces: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c7mrh0e96x978mlixqvo7ekh36zmyaa3505s3qkjoijl8q6hvoz',
          property: 'profileId',
        },
      },
    },
    Session: {
      tags: { type: 'string', required: false, immutable: false },
      type: { type: 'string', required: false, immutable: false },
      title: { type: 'string', required: true, immutable: false },
      track: { type: 'string', required: false, immutable: false },
      format: { type: 'string', required: false, immutable: false },
      status: { type: 'string', required: false, immutable: false },
      endTime: { type: 'datetime', required: true, immutable: false },
      eventId: { type: 'streamid', required: true, immutable: false },
      tagline: { type: 'string', required: false, immutable: false },
      speakers: {
        type: 'list',
        required: false,
        immutable: false,
        item: { type: 'did', required: false, immutable: false },
      },
      timezone: { type: 'string', required: false, immutable: false },
      createdAt: { type: 'datetime', required: true, immutable: false },
      profileId: { type: 'streamid', required: true, immutable: false },
      startTime: { type: 'datetime', required: true, immutable: false },
      video_url: { type: 'string', required: false, immutable: false },
      organizers: {
        type: 'list',
        required: false,
        immutable: false,
        item: { type: 'did', required: false, immutable: false },
      },
      description: { type: 'string', required: false, immutable: false },
      meeting_url: { type: 'string', required: false, immutable: false },
      experience_level: { type: 'string', required: false, immutable: false },
      event: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c7q43m9k4svnkscfkl9b45gvucwsdx3ggudzm7q2rnkdvo0xy4x',
          property: 'eventId',
        },
      },
      author: { type: 'view', viewType: 'documentAccount' },
      profile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9957frdp3kb202l590wba573vvo460408bfv6blvnga34sz3ef',
          property: 'profileId',
        },
      },
    },
    Space: {
      ens: { type: 'string', required: false, immutable: false },
      lens: { type: 'string', required: false, immutable: false },
      name: { type: 'string', required: true, immutable: false },
      admin: {
        type: 'list',
        required: true,
        immutable: false,
        item: { type: 'did', required: true, immutable: false },
      },
      gated: { type: 'string', required: false, immutable: false },
      nostr: { type: 'string', required: false, immutable: false },
      avatar: { type: 'string', required: false, immutable: false },
      banner: { type: 'string', required: false, immutable: false },
      github: { type: 'string', required: false, immutable: false },
      discord: { type: 'string', required: false, immutable: false },
      members: {
        type: 'list',
        required: false,
        immutable: false,
        item: { type: 'did', required: false, immutable: false },
      },
      tagline: { type: 'string', required: false, immutable: false },
      twitter: { type: 'string', required: false, immutable: false },
      website: { type: 'string', required: false, immutable: false },
      category: { type: 'string', required: false, immutable: false },
      telegram: { type: 'string', required: false, immutable: false },
      profileId: { type: 'streamid', required: true, immutable: false },
      customLinks: {
        type: 'list',
        required: false,
        immutable: false,
        item: {
          type: 'reference',
          refType: 'object',
          refName: 'SpaceLink',
          required: false,
          immutable: false,
        },
      },
      description: { type: 'string', required: true, immutable: false },
      author: { type: 'view', viewType: 'documentAccount' },
      profile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9957frdp3kb202l590wba573vvo460408bfv6blvnga34sz3ef',
          property: 'profileId',
        },
      },
      events: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c7q43m9k4svnkscfkl9b45gvucwsdx3ggudzm7q2rnkdvo0xy4x',
          property: 'spaceId',
        },
      },
    },
    SpaceLink: {
      links: { type: 'string', required: true, immutable: false },
      title: { type: 'string', required: true, immutable: false },
    },
  },
  enums: {},
  accountData: {
    eventList: { type: 'connection', name: 'Event' },
    mvpProfile: { type: 'node', name: 'MVPProfile' },
    sessionList: { type: 'connection', name: 'Session' },
    spaceList: { type: 'connection', name: 'Space' },
  },
};
