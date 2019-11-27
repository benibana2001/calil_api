import f = require('fetch-jsonp');
import fetchJsonp = require('fetch-jsonp');
import { resolve } from 'dns';
export { Calil, options }

class Calil {
    //----------------------------------------
    public api_timeout_timer: number = 0
    public api_call_count: number = 0
    public data_cache: string = ''
    //
    public systemid_list: number[] = []
    public isbn_list: number[] = []
    //
    private _options: options
    //----------------------------------------
    constructor(O: options) {
        console.log('hello Calil.ts')
        // Set Arguments.
        this._options = O
        // Check Arguments.
        this.init()
    }
    //----------------------------------------
    /**
     * init
     */
    public init(): void {
        this.checkOptions()
        console.log(fetchJsonp)
    }
    /**
     * checkOptions
     * Validate Options each value.
     */
    public checkOptions(): void {
        // Set AppKey
        if (!this._options.appkey) {
            alert('Please enter appkey')
        }
        // Set ISBN to property.

        // Set SystemID to property.
    }
    /**
     * search
     * 
     * Call api using XMLHttpRequest or fetch with JSONP.
     * If using fetch API, using third party library for JSONP is required 
     * because not supported in standard fetch API.
     * 
     */
    public async search(): Promise<any> {
        await this.callApi()
    }
    /**
     * callApi
     */
    public async callApi(): Promise<any> {
        let appkey: string = this._options.appkey
        // Create url
        let url: string = 'https://api.calil.jp/check?appkey=' + appkey + '&isbn=1920197008605&systemid=Tokyo_Setagaya&format=json'
        //
        let something: fetchJsonp.Response = await fetchJsonp(url).then((response) => {
            return response.json()
        })
        console.log(something)
    }
}

interface options {
    'appkey': string,
    'isbn': number[],
    'systemid': number[]
}