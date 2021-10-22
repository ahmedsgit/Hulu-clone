import Image from 'next/image';
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightBulbIcon, SearchIcon, UserIcon} from "@heroicons/react/outline";
import huluLogo from '../assets/image/hulu-logo.png';
import HeaderItem from './HeaderItem';
export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon}/>
                <HeaderItem title="Trending" Icon={LightBulbIcon}/>
                <HeaderItem title="verified" Icon={BadgeCheckIcon}/>
                <HeaderItem title="collections" Icon={CollectionIcon}/>
                <HeaderItem title="search" Icon={SearchIcon}/>
                <HeaderItem title="account" Icon={UserIcon}/>
            </div>
            <Image className="object-contain" src={huluLogo} alt="hulu logo" width={150} height={100}/>  
        </header>
    )
}
