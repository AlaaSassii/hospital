export function formatDateTime(dateTimeString) {
              console.log("dateTimeString" , dateTimeString)
            if (dateTimeString === undefined) return ''
            const dateTime = new Date(dateTimeString);
            const date = dateTime.toLocaleDateString();
            const time = dateTime.toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const offset = dateTime.getTimezoneOffset() / -60;
            const gmtOffset = `GMT${offset < 0 ? '' : '+'}${offset}`;
            const offsetTimeZone = `${timeZone} ${gmtOffset}`;
            return `${date} ${time} ${offsetTimeZone}`;
          }



export function replaceUnderscores(str) {
            return str.replace(/_/g, ' ');
          }