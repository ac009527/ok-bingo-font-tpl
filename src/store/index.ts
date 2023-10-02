import { create, createStore } from 'zustand';
import { devtools } from 'zustand/middleware';
type UserInfoResult = Record<string, any>;
export const defaultUserData = {
  userInfo: {
    id: '',
    phone: '',
    nickname: '',
    full_name: '',
    balance: 0,
  },
  upcomingMessages: [] as UpcomingMessageData[],
};
export type UserStateType = typeof defaultUserData;
export type UpcomingMessageData = {
  e: number;
  b?: Record<string, any>;
};
export interface Functions {
  setUserInfo: (userInfo?: UserInfoResult) => void;
  addUpcomingMessage(v: UpcomingMessageData): any;
  clearUpcomingMessage(): void;
}
export const useDemoStore = create(devtools((set, _v) => ({
    count: 1,
    inc: () => set((state: any) => ({ count: state.count + 1 })),
  })))

export const useUserStore = createStore<typeof defaultUserData & Functions>()(
    devtools((set, v) => {
      return {
        ...defaultUserData,
        setUserInfo: (userInfo?: UserInfoResult) => set({ userInfo } ),
        addUpcomingMessage: (v: UpcomingMessageData) =>
          set(
            (state : typeof defaultUserData) =>
              ({ upcomingMessages: state.upcomingMessages.concat([v]) }) 
          ),
        clearUpcomingMessage: () => set({ upcomingMessages: [] } ),
        // 多次使用的全局状态写在这，简化内容
        // async updateUserInfo() {
        //   if (!getCookie('token')) return;
        //   return userInfo().then((userInfo) => {
        //     if (isObject(userInfo)) {
        //       set({ userInfo } as any);
        //     }
        //     return userInfo;
        //   });
        // },
      };
    })
  );
