function CommonLayout({children}){
    return <div className="mx-auto max-w-7xl p-6 lg:px-8">
        {/* HeaderComponent*/}
        Header
        {/* HeaderComponent*/}

        {/*Main  Content*/}
        <main > {children}</main>
        {/*Main  Content*/}

    </div>
}

export default CommonLayout