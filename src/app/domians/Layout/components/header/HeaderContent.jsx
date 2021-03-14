import LinkedInIcon from "../../../../../assests/icons/linkedIn.svg";
import SearchIcon from "../../../../../assests/icons/search.svg";
import Input from "./../../../Common/components/forms/input/Input";
import { SvgIcon } from "./../../../Common/components/svg-icon";

const HeaderContent = () => {
  return (
    <div className="flex">
      <div className="flex items-center w-full lg:mr-80 lg:w-auto">
        <img
          loading="lazy"
          className="hidden w-10 h-10 mx-0 ml-10 mr-3 cursor-pointer lg:block"
          src={LinkedInIcon}
          alt="Islaamify360-Logo"
          width="133"
          height="40"
        />
        <div className="block lg:hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            alt="me"
            className="w-6 h-6 mr-4 rounded-full"
          />
        </div>
        <div className="w-full mr-2 sm:mr-2 md:w-full">
          <Input
            autocomplete="off"
            name="searhVideo"
            type="text"
            className="pl-16 placeholder-gray-400"
            placeholder={`Search`}
            withIcon
            icon={
              <img
                src={SearchIcon}
                alt="searchIcon"
                className="w-5 h-5 mx-auto "
              />
            }
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center">
          <li className="px-4">
            <div className="flex justify-center">
              <SvgIcon className="dark:text-white" icon="HomeIcon" />
            </div>
            <div className="text-black dark:text-white">Home</div>
          </li>
          <li className="px-4">
            <div className="flex justify-center">
              <SvgIcon className="dark:text-white" icon="NetworkIcon" />
            </div>
            <div className="text-black dark:text-white">My Network</div>
          </li>
          <li className="px-4">
            <div className="flex justify-center">
              <SvgIcon className="dark:text-white" icon="JobIcon" />
            </div>
            <div className="text-black dark:text-white">Jobs</div>
          </li>
          <li className="px-4">
            <div className="flex justify-center">
              <SvgIcon className="dark:text-white" icon="MessageIcon" />
            </div>
            <div className="text-black dark:text-white">Messaging</div>
          </li>
          <li className="px-4">
            <div className="flex justify-center">
              <SvgIcon className="dark:text-white" icon="NotificationIcon" />
            </div>
            <div className="text-black dark:text-white">Notifications</div>
          </li>
          <li className="px-4">
            <div className="flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                alt="me"
                className="w-6 h-6 rounded-full"
              />
            </div>
            <div className="text-black dark:text-white">Me</div>
          </li>
          <li className="px-4 border-l-2 border-gray-200">
            <div className="flex justify-center ">
              <SvgIcon className="dark:text-white" icon="WorkIcon" />
            </div>
            <div className="text-black dark:text-white">Work</div>
          </li>
          <li className="px-4">
            <div className="flex justify-center">
              <SvgIcon className="dark:text-white" icon="PostJobIcon" />
            </div>
            <div className="text-black dark:text-white">Post a Job</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderContent;
