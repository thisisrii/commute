import * as React from 'react';
import { IDriver, IAppState } from '../models/interfaces';

interface IProps {
    driver: IDriver;
}

export class DriverDetail implements React.Component<IProps & IAppState>{
    setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: IProps & IAppState) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void {
        throw new Error("Method not implemented.");
    }
    forceUpdate(callBack?: () => void): void {
        throw new Error("Method not implemented.");
    }
    props: Readonly<{ children?: React.ReactNode; }> & Readonly<IProps & IAppState>;
    state: Readonly<{}>;
    context: any;
    refs: { [key: string]: React.ReactInstance; };
    componentWillMount?(): void {
        throw new Error("Method not implemented.");
    }
    componentDidMount?(): void {
        throw new Error("Method not implemented.");
    }
    componentWillReceiveProps?(nextProps: Readonly<IProps & IAppState>, nextContext: any): void {
        throw new Error("Method not implemented.");
    }
    shouldComponentUpdate?(nextProps: Readonly<IProps & IAppState>, nextState: Readonly<{}>, nextContext: any): boolean {
        throw new Error("Method not implemented.");
    }
    componentWillUpdate?(nextProps: Readonly<IProps & IAppState>, nextState: Readonly<{}>, nextContext: any): void {
        throw new Error("Method not implemented.");
    }
    componentDidUpdate?(prevProps: Readonly<IProps & IAppState>, prevState: Readonly<{}>, prevContext: any): void {
        throw new Error("Method not implemented.");
    }
    componentWillUnmount?(): void {
        throw new Error("Method not implemented.");
    }
    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void {
        throw new Error("Method not implemented.");
    }

    driver: undefined;

    render() {
        


        if (this.driver == null || this.driver === undefined){
            return <div> Loading... </div>
        }else{
            return (
                <div>
                    <div className="driverDetails_" {this.driver.ID}>
                        <div>{this.driver.Name}</div>
                        <div>{this.driver.Surname}</div>
                    </div>
                </div>
            );

    }
        }


 
}