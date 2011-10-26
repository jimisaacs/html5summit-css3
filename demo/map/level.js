// abbreviations for level data
var dBl = 'floor_empty',
    dBlLi = 'floor_empty_light',
    dF = 'floor_base',
    dFC = 'floor_cybernode',
    dFB = 'floor_biosupport',
    dFF = 'floor_forcefield',
    
	// walls
    dL = 'left',
    dR = 'right',
    dT = 'top',
    dB = 'bottom',
    
    dBL_TR = 'bottomleft_to_topright',
    dBR_TL = 'bottomright_to_topleft',
    
    // modifiers
    mHT = 'highlight_top',
    mHR = 'highlight_right',
    mHB = 'highlight_bottom',
    mHL = 'highlight_left';
    
var levelData = {

    width   : 17,
    height  : 11,
    tiles   : [
        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },

        { f : [ dBlLi ], w : [] },
        { f : [ dFC ], w : [ dBL_TR ] },
        { f : [ dFC ], w : [ dT ] },
        { f : [ dFC ], w : [ dBR_TL] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dBL_TR ] },
        { f : [ dF ], w : [ dT ] },
        { f : [ dF ], w : [ dBR_TL ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },        

        { f : [ dBlLi ], w : [] },
        { f : [ dFC ], w : [ dL ] },
        { f : [ dFC ], w : [] },
        { f : [ dFC ], w : [] },
        { f : [ dF, dFF ], w : [ dT, dB ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },

        { f : [ dBlLi ], w : [] },
        { f : [ dFC ], w : [ dBR_TL ] },
        { f : [ dFC ], w : [] },
        { f : [ dFC ], w : [ dBL_TR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dBR_TL ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [ dBL_TR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dT, dL ] },
        { f : [ dF, mHT ], w : [ dT ] },
        { f : [ dF ], w : [ dT, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },

        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dL, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF, dFF ], w : [ dL, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [] },
        { f : [ dF, dFF ], w : [ dT, dB ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [] },
        { f : [ dF, mHR ], w : [ dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },

        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dF, dFF ], w : [ dL, dR ] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dF ], w : [ dT, dL ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [ dT, dB ] },
        { f : [ dF ], w : [ dT, dB ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [ dB, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dB, dL ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [ dB, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },

        { f : [ dBl ], w : [ ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dL, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF, dFF ], w : [ dL, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF, dFF ], w : [ dL, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] },

        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dBL_TR ] },
        { f : [ dF ], w : [ ] },
        { f : [ dF ], w : [ dBR_TL] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dT, dL ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [ dT, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dFB ], w : [ dT, dL ] },
        { f : [ dFB ], w : [] },
        { f : [ dFB ], w : [ dT, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },

        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [] },
        { f : [ dF, dFF ], w : [ dT, dB ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF, mHL ], w : [ dL ] },
        { f : [ dF ], w : [] },
        { f : [ dF ], w : [] },
        { f : [ dF, dFF ], w : [ dT, dB ] },
        { f : [ dFB ], w : [] },
        { f : [ dFB ], w : [] },
        { f : [ dFB, mHR ], w : [ dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },

        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dBR_TL ] },
        { f : [ dF ], w : [ dB ] },
        { f : [ dF ], w : [ dBL_TR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dF ], w : [ dB, dL ] },
        { f : [ dF, mHB ], w : [ dB ] },
        { f : [ dF ], w : [ dB, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dFB ], w : [ dB, dL ] },
        { f : [ dFB, mHB ], w : [ dB ] },
        { f : [ dFB ], w : [ dB, dR ] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },

        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dF ], w : [ dL ] },
        { f : [ dF ], w : [ dR ] },
        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBlLi ], w : [] },
        { f : [ dBl ], w : [] },
        { f : [ dBl ], w : [] }
    ],
    
    objects : [
        {
            name : 'hi'
        }
    ]
}